import Question from "@/components/forms/Question";

const Page = async () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>

      <div className="mt-9">
        <Question type="create" />
      </div>
    </div>
  );
};

export default Page;
