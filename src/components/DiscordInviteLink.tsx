import Translate from '@docusaurus/Translate';

const DiscordInviteLink = ({
  imageSrc,
  imageAlt,
  name,
  link,
}: {
  imageSrc: string;
  imageAlt: string;
  name: string;
  link: string;
}) => {
  return (
    <div className="my-5 bg-[#2B2D31] rounded p-4 max-w-[520px]">
      <div className="uppercase font-bold text-sm text-[#B5BAB8] mb-3">
        <Translate>Add the bot to your server</Translate>
      </div>
      <div className="flex items-center gap-4">
        <img className="h-16 w-16 rounded-3xl" src={imageSrc} alt={imageAlt} />
        <div className="font-bold text-lg">{name}</div>
        <a
          role="button"
          target="_blank"
          href={link}
          rel="noopener noreferrer"
          className="text-white no-underline hover:no-underline font-semibold ml-auto py-3 px-6 cursor-pointer text-base bg-[#248046] border-none rounded hover:text-white hover:bg-[#1A6334] active:bg-[#15562B] transition-colors"
        >
          <Translate>Add Bot</Translate>
        </a>
      </div>
    </div>
  );
};

export default DiscordInviteLink;
