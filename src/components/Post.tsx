type Props = {
  title: string;
  content: string;
};

function Post({ title, content }: Props) {
  return (
    <article className="bg-white my-4 mx-10 rounded-lg px-5 min-h-[120px] pt-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{content.substring(0, 100)}</p>
    </article>
  );
}

export default Post;
