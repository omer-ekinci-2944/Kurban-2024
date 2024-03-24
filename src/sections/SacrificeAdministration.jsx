import { AccordionMultiple } from "../components/";

const SacrificeAdministration = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <AccordionMultiple
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
      <AccordionMultiple
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />
      <AccordionMultiple
        title="Firebase or Supabase?"
        answer="I am using Supabase!"
      />
    </div>
  );
};

export default SacrificeAdministration;
