import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

const CreateBook = () => {
  const navigate = useNavigate();
  // const authors = ["Author A", "Author B", "Author C"];
  const authors = null;
  // const publishers = ["Publisher A", "Publisher B", "Publisher C"];
  const publishers = null;
  const languages = ["Portuguese", "English", "French"];
  const { control, register } = useForm({
    defaultValues: {
      paragraphs: [
        {
          text: "",
        },
      ],
      images: [
        {
          url: "",
        },
      ],
    },
  });
  const paragraphs = useFieldArray({
    name: "paragraphs",
    control,
  });

  const images = useFieldArray({
    name: "images",
    control,
  });

  const handleGoToAuthorCreatePage = () => {
    navigate("/author/create");
  };

  const handleGoToCreatePublisherPage = () => {
    navigate("/publisher/create");
  };
  return (
    <div>
      <p className="font-bold text-[30px] mb-4">Add Book</p>
      <form className="flex flex-col items-start space-y-2">
        <Input type="text" label="Title" />
        {authors ? (
          <Select label="Author" options={authors} />
        ) : (
          <div className="flex space-x-2">
            <p>We do not have authors</p>
            <button
              className="border border-gray-500 px-2 rounded-lg"
              type="button"
              onClick={handleGoToAuthorCreatePage}
            >
              + Author
            </button>
          </div>
        )}
        {/* How we can select multiple files? and have previews of them? */}
        <div className="w-full">
          <div className="flex space-x-2 mb-2">
            <p className="font-bold text-xl">Images</p>
            <button
              type="button"
              className="border border-gray-500 px-2"
              onClick={() =>
                images.append({
                  url: "",
                })
              }
            >
              + Add
            </button>
          </div>

          <div className="space-y-2">
            {images.fields.map((field, index) => {
              return (
                <div className="space-x-2">
                  <label>{`Image URL ${index + 1}`}</label>
                  <input
                    type="text"
                    key={field.id}
                    {...register(`images.${index}.url`)}
                    className="border border-gray-500"
                  />
                  {images.fields.length > 1 && (
                    <button
                      type="button"
                      className="border border-gray-500 px-2"
                      onClick={() => images.remove(index)}
                    >
                      - Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Input type="number" label="Price" />
        <Input type="number" label="Page_Count" />
        <Select label="Language" options={languages} />
        {publishers ? (
          <Select label="Publishers" options={publishers} />
        ) : (
          <div className="flex space-x-2">
            <p>We do not have any publishers</p>
            <button
              className="border border-gray-500 px-2 rounded-lg"
              type="button"
              onClick={handleGoToCreatePublisherPage}
            >
              + Publisher
            </button>
          </div>
        )}
        {/* Paragraphs can me made with react form hooks array */}
        <div className="w-full">
          <div className="flex space-x-2 mb-2">
            <p className="font-bold text-xl">Description</p>
            <button
              type="button"
              className="border border-gray-500 px-2"
              onClick={() =>
                paragraphs.append({
                  text: "",
                })
              }
            >
              + Add
            </button>
          </div>

          <div className="space-y-2">
            {paragraphs.fields.map((field, index) => {
              return (
                <div className="space-x-2">
                  <label>{`Paragraph ${index + 1}`}</label>
                  <input
                    type="text"
                    key={field.id}
                    {...register(`paragraphs.${index}.text`)}
                    className="border border-gray-500"
                  />
                  {paragraphs.fields.length > 1 && (
                    <button
                      type="button"
                      className="border border-gray-500 px-2"
                      onClick={() => paragraphs.remove(index)}
                    >
                      - Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <Input type="date" label="Published_Date" />
        <div>
          <p className="font-black text-xl">Dimensions</p>
          <div className="flex space-x-2">
            <Input type="number" label="Length" />
            <Input type="number" label="Height" />
            <Input type="number" label="Depth" />
          </div>
        </div>
        <button className="border border-black px-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default CreateBook;

interface BookI {
  id: number;
  title: string; //ok
  authors: {
    //not okay we can have more than one author
    //ok(mocked)
    id: number;
    name: string;
  }[];
  images: {
    //ok
    id: number;
    bookId: number;
    url: string;
    cover: boolean;
  }[];
  price: number; //ok
  rating: number; //needs to be done in the service.
  numberOfClientRatings: number; //needs to be done in the service.
  description: {
    //needs implementation
    id: number;
    paragraphs: {
      //ok
      id: number;
      descriptionId: number;
      text: string;
      position: number;
    }[];
  };
  review: {
    //not here, other crud.
    bookId: number;
    text: string;
    reviewer: string;
  };
  pageCount: number; //ok
  language: string; //ok
  publishingCompany: {
    //ok(mocked)
    id: number;
    name: string;
  };
  publishingDate: Date; //ok
  dimensions: {
    id: number;
    bookId: number;
    width: number;
    height: number;
    depth: number;
  };
}
