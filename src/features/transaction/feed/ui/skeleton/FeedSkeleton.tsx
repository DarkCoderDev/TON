import { TransactionSkeleton } from 'entities/transaction';
import { Fade } from 'shared/ui';

export const FeedSkeleton = (props: { visible: boolean }) => {
  const { visible } = props;
  return (
    <Fade init={visible} duration={200}>
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
      <TransactionSkeleton />
    </Fade>
  );
};
