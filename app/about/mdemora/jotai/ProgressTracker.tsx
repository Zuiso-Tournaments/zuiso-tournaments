import {progressAtom} from '@/app/about/mdemora/jotai/derivedAtoms';
import {Progress} from '@/components/ui/progress';
import {useAtomValue} from 'jotai';

const ProgressTracker = () => {
  const progress = useAtomValue(progressAtom);

  return (
    <div className="flex max-w-96 items-center gap-2 bg-slate-500 ">
      <Progress value={progress * 100} className="w-full " />
      {Math.trunc(progress * 100)}%
    </div>
  );
};

export default ProgressTracker;
