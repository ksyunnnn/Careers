'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Button } from '@/components/ui/button';
import * as Icons from '@/icons';
import { CAREER_BREAK, POSITION } from './const';
import { useEditCareerFormContext } from '../../provider';

interface Preset {
  id: string;
  name: string;
  content: string;
}

const presets: Preset[] = [
  {
    id: '9cb0e66a-9937-465d-a188-2c4c4ae2401f',
    name: 'Position template',
    content: POSITION,
  },
  {
    id: '61eb0e32-2391-4cd3-adc3-66efe09bc0b7',
    name: 'Career break template',
    content: CAREER_BREAK,
  },
];

export const PresetSelector = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setValue } = useEditCareerFormContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Load a preset..."
          aria-expanded={open}
          className="flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]"
        >
          Load a preset...
          <Icons.CaretUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search presets..." />
          <CommandEmpty>No presets found.</CommandEmpty>
          <CommandGroup heading="Templates">
            {presets.map((preset) => (
              <CommandItem
                key={preset.id}
                onSelect={() => {
                  setOpen(false);
                  setValue('contents', preset.content, { shouldDirty: true });
                }}
              >
                {preset.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup className="pt-0">
            <CommandItem
              className="text-muted-foreground"
              disabled
              onSelect={() => router.push('/')}
              title="Sorry, we are still getting ready."
            >
              <Icons.Barricade className="mr-2 h-4 w-4" /> Add templates
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
