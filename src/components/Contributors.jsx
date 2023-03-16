import * as HoverCard from '@radix-ui/react-hover-card'
import { replicateArray } from '@/helper'

// replicateArray function is used for testing against multiple contributors.
const core = replicateArray(
  [
    {
      name: 'Eric Diviney',
      description: 'Software Engineer | IMB Consulting',
      socials: {
        twitter: 'https://twitter.com/EricDiviney',
        github: 'https://github.com/ericdiviney',
        site: 'https://ericdiviney.com/',
      },
      image: '/eric-diviney.jpg',
    },
  ],
  1
)

const maintainers = replicateArray(
  [
    {
      name: 'Theophilus Ekunnusi',
      description: 'Student Frontend Engineer | Alx',
      socials: {
        twitter: 'https://twitter.com/theo_flux',
        github: 'https://github.com/Theo-flux',
      },
      image: 'https://avatars.githubusercontent.com/u/72856939?s=120&v=4',
    },
  ],
  1
)

export function Contributors() {
  return (
    <div className="my-16 border-y border-zinc-400 py-4 dark:border-zinc-700">
      <div className="mb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-white">
            Core Team
          </span>
        </div>
        <div className="align-items flex flex-wrap justify-start gap-2 py-4 px-2">
          {core.map((person) => (
            <MemberCard key={person.image} person={person} large />
          ))}
        </div>
      </div>

      <div className="">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-white">
            Project Maintainers
          </span>
        </div>
        <div className="align-items flex flex-wrap justify-start gap-2 py-4 px-2">
          {maintainers.map((person) => (
            <MemberCard key={person.image} person={person} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MemberCard({ person, large = false }) {
  const { description, image, name, socials } = person

  const size = large ? 16 : 10

  return (
    <HoverCard.Root key={image}>
      <HoverCard.Trigger asChild className="">
        <a
          className="w-fit cursor-pointer rounded-full border outline-none"
          href={socials.site}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            key={image}
            className={`my-0 h-[40px] w-[40px] rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] ring-2 ring-white dark:ring-zinc-900`}
            src={image}
            alt=""
          />
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal className="">
        <HoverCard.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
          sideOffset={5}
        >
          <div className="flex flex-col gap-[7px]">
            <img className="block h-[40px] w-[40px] rounded-full" src={image} />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="m-0 font-medium leading-[1.5]">{name}</div>
              </div>
              <div className="m-0 text-sm leading-[1.5]">{description}</div>
              <div className="prose flex gap-[15px]">
                {socials.twitter && (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={socials.twitter}
                    className="m-0 text-sm leading-[1.5]"
                  >
                    Twitter
                  </a>
                )}
                {socials.github && (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={socials.github}
                    className="m-0 text-sm leading-[1.5]"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}
