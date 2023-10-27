interface Props {
  label: string;
  className?: string;
}
export const Tag = (props: Props) => {
  const { label, className } = props;
  return (
    <li
      className={`${className} w-fit rounded-full bg-zinc-100 px-2 py-0.5 text-xs`}
    >
      {label}
    </li>
  );
};
