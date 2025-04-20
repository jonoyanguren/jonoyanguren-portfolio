export default function SubTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <h2 className="text-xl text-sky-300 font-mono text-center">{title}</h2>
      <h1 className="text-2xl font-bold mb-12 text-center text-white">
        {subtitle}
      </h1>
    </>
  );
}
