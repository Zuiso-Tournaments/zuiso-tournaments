import dayjs from 'dayjs';
import {ClockIcon} from 'lucide-react';

import {forwardRef, useEffect, useRef} from 'react';

import {cn} from '@/lib/cn';

import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

interface TimePickerProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const TimePicker = forwardRef<any, TimePickerProps>(
  ({onChange, value}, ref) => {
    const hourRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      hourRef.current?.scrollTo({
        behavior: 'instant',
        top: document.getElementById(
          `hour-${Number(dayjs(value).format('HH')) - 1}`
        )?.offsetTop,
      });

      timeRef.current?.scrollTo({
        behavior: 'instant',
        top: document.getElementById(
          `minute-${Number(dayjs(value).format('mm')) - 1}`
        )?.offsetTop,
      });
    }, [value]);

    const handleScrollTimeout = () => {
      setTimeout(() => {
        const hourContainer = document.getElementById('hourRef');
        const timeContainer = document.getElementById('timeRef');
        const hourButton = document.getElementById(
          `hour-${Number(dayjs(value).format('HH')) - 1}`
        );
        const timeButton = document.getElementById(
          `minute-${Math.floor(Number(dayjs(value).format('mm')) / 5)}`
        );

        if (!hourContainer) return;
        if (!hourButton) return;
        if (!timeContainer) return;
        if (!timeButton) return;

        hourContainer?.scrollTo({
          behavior: 'instant',
          top: hourButton.offsetTop - 8,
        });
        timeContainer?.scrollTo({
          behavior: 'instant',
          top: timeButton.offsetTop - 8,
        });
      }, 100);
    };

    const handleScrollHour = (id: string) => {
      const hourElement = document.getElementById(id);
      if (hourElement) {
        hourRef.current?.scrollTo({
          behavior: 'smooth',
          top: hourElement.offsetTop - 8,
        });
      }
    };
    const handleScrollTime = (id: string) => {
      const timeElement = document.getElementById(id);
      if (timeElement) {
        timeRef.current?.scrollTo({
          behavior: 'smooth',
          top: timeElement.offsetTop - 8,
        });
      }
    };

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            onClick={handleScrollTimeout}
            ref={ref}
            variant={'outline'}
            className={cn(!value && 'text-muted-foreground')}>
            <ClockIcon color="#76777A" className="ml-2 size-4 shrink-0" />
            {`${dayjs(value).format('HH:mm')}h`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto p-2">
          <div
            className="flex h-48 w-10 flex-col gap-2 overflow-auto pb-40"
            id="hourRef"
            ref={hourRef}>
            {Array.from({length: 24}, (_, i) => (
              <Button
                id={`hour-${i}`}
                key={i}
                size="sm"
                color="white"
                className={cn(
                  'rounded-sm',
                  i + 1 === Number(dayjs(value).format('HH')) &&
                    'bg-orange-25 text-brand-orange'
                )}
                onClick={() => {
                  onChange(
                    dayjs()
                      .startOf('day')
                      .add(i + 1, 'hour')
                      .add(Number(dayjs(value).format('mm')), 'minute')
                      .toISOString()
                  );
                  handleScrollHour(`hour-${i}`);
                }}>
                {(i + 1).toLocaleString('es-ES', {
                  minimumIntegerDigits: 2,
                })}
              </Button>
            ))}
          </div>
          <div
            className="flex h-48 w-10 flex-col gap-2 overflow-hidden pb-40 hover:overflow-auto"
            id="timeRef"
            ref={timeRef}>
            {Array.from({length: 12}, (_, i) => (
              <Button
                id={`minute-${i}`}
                key={i}
                size="sm"
                color="white"
                className={cn(
                  'rounded-sm',
                  i * 5 === Number(dayjs(value).format('mm')) &&
                    'bg-orange-25 text-brand-orange'
                )}
                onClick={() => {
                  onChange(
                    dayjs()
                      .startOf('day')
                      .add(Number(dayjs(value).format('HH')), 'hour')
                      .add(i * 5, 'minute')
                      .toISOString()
                  );
                  handleScrollTime(`minute-${i}`);
                }}>
                {(i * 5).toLocaleString('es-ES', {
                  minimumIntegerDigits: 2,
                })}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    );
  }
);
TimePicker.displayName = 'TimePicker';

export default TimePicker;
