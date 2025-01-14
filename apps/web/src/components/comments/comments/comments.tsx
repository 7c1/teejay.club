import { AppRouter } from "@teejay/api";
import { observer } from "mobx-react-lite";

import { useInfiniteScroll } from "../../../hooks";
import { trpc } from "../../../utilities";
import { Card } from "../../card";
import { PluralForm } from "../../plural-form";
import { Spinner } from "../../spinner";
import { Comment } from "../comment";
import { NewCommentForm } from "../new-comment-form";

type Props = {
  postId: number;

  comments: AppRouter["comments"]["getMany"]["_def"]["_output_out"];
};

export const Comments = observer<Props>(({ postId, comments }) => {
  const commentsQuery = trpc.comments.getMany.useInfiniteQuery(
    {
      postId,
      sort: "old",
      take: 20,
    },
    {
      initialData: {
        pages: [comments],
        pageParams: [],
      },
      getNextPageParam: (lastPage) => lastPage.meta.nextCursor,
    }
  );

  useInfiniteScroll(
    commentsQuery.isFetching,
    commentsQuery.hasNextPage,
    commentsQuery.fetchNextPage
  );

  const { total } = commentsQuery.data?.pages?.[0]?.meta ?? { total: 0 };

  return (
    <Card id="comments" className="relative flex flex-col w-full max-w-2xl">
      <div className="font-bold text-xl">
        {total}{" "}
        <PluralForm
          number={total}
          one="комментарий"
          few="комментария"
          many="комментариев"
        />
      </div>
      <div className="relative mt-3 flex flex-col gap-y-2">
        <Spinner isSpinning={commentsQuery.isLoading} />
        {total > 10 && (
          <NewCommentForm postId={postId} onCreate={commentsQuery.refetch} />
        )}
        {commentsQuery.data?.pages.flatMap((page) =>
          page.data.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
        <NewCommentForm postId={postId} onCreate={commentsQuery.refetch} />
      </div>
    </Card>
  );
});
