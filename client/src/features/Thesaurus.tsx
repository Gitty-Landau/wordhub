import { Input } from '@/components/ui/input';
import { useThesaurusWord } from '@/hooks/thesaurus';
import { useEffect, useState } from 'react';
import { titleCase } from '@/utils/strings';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Thesaurus = () => {
  const [word, setWord] = useState('');
  const [debouncedWord, setDebouncedWord] = useState('');
  const { data, isFetched, isLoading, isSuccess } =
    useThesaurusWord(debouncedWord);

  // Debounce the word input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedWord(word);
    }, 500);

    return () => clearTimeout(timer);
  }, [word]);

  return (
    <div
      className={cn('grow flex flex-col items-center gap-8', {
        'justify-center': !(isFetched || isLoading),
      })}
    >
      {!(isFetched || isLoading) && (
        <div className='flex flex-col gap-4 items-center justify-center'>
          <span className='text-4xl tracking-widest'>Get started</span>
          <div className='text-muted-foreground'>Type in a word</div>
        </div>
      )}
      <Input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder='Find synonyms...'
        className='w-[40%]'
      />
      {isSuccess &&
        (data?.length ? (
          data.map((word, i) => (
            <Card className='w-full' key={i}>
              <CardHeader>
                <CardTitle className='flex gap-2'>
                  {titleCase(word.hwi.hw)}
                  <span className='text-muted-foreground italic font-thin'>
                    {word.fl}
                  </span>
                </CardTitle>
                <CardDescription>{word.shortdef.join('\n')}</CardDescription>
                <CardContent className='flex flex-wrap gap-6 px-0'>
                  {word.meta.syns.map((syns) => {
                    return syns.map((syn, i) => <div key={i}>{syn}</div>);
                  })}
                </CardContent>
              </CardHeader>
            </Card>
          ))
        ) : (
          <div className='text-muted-foreground'>No results found</div>
        ))}
    </div>
  );
};

export default Thesaurus;
