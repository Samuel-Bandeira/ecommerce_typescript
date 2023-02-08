import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Input from "../components/Input";

const CreatePublisher = () => {
  const { control, register } = useForm({
    defaultValues: {
      books: [
        {
          bookId: null,
        },
      ],
    },
  });
  const booksField = useFieldArray({
    name: "books",
    control,
  });

  const books: Array<object> = [];

  const handleAppendBook = (append: any) => {
    if (books.length > 0) {
      append({
        id: null,
      });
    }
  };

  const handleBookRemove = (remove: any, index: number) => {
    remove(index);
  };
  return (
    <form className="space-y-2">
      <p className="font-bold text-[30px]">Add Publisher</p>
      <Input type="text" label="Name" />
      <div className="flex space-x-2">
        <p>Author of</p>
        <button
          className="border border-gray-500 rounded-xl px-2"
          onClick={() => handleAppendBook(booksField.append)}
          type="button"
        >
          + Book
        </button>
      </div>
      {books.length > 0 ? (
        booksField.fields.map((field: any, index: number) => {
          return (
            <div className="flex space-x-2">
              <label>Book {index + 1}</label>
              <div className="flex space-x-2">
                <select
                  key={field.id}
                  {...register(`books.${index}.bookId`)}
                  className="border border-gray-500"
                >
                  {books.length > 0 &&
                    books.map((book: any, index: number) => {
                      return (
                        <option value={book.id} key={index}>
                          {book.name}
                        </option>
                      );
                    })}
                </select>
                <button
                  className="border border-gray-500 rounded-xl px-2"
                  onClick={() => handleBookRemove(booksField.remove, index)}
                  type="button"
                >
                  - Book
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>There are no registered books</p>
        </div>
      )}
      <button className="px-2 border border-gray-500 rounded-xl">Submit</button>
    </form>
  );
};

export default CreatePublisher;
