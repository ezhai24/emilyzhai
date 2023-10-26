interface Props {
  label: string;
}
export const Tag = (props: Props) => {
  const { label } = props;
  return (
    <li className="w-fit rounded-full bg-zinc-100 px-2 py-0.5 text-xs">
      {label}
    </li>
  );
};
