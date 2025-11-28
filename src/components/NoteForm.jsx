import { useState } from "react";
import { LuCirclePlus, LuX } from "react-icons/lu";
import InputText from "./InputText";
import SelectInput from "./SelectInput";
import InputCheckbox from "./InputCheckbox";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    description: "",
    priority: "High",
    isPinned: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  const priorityOptions = [
    {
      name: "High",
    },
    {
      name: "Medium",
    },
    {
      name: "Low",
    },
  ];

  const categoryOptions = [
    {
      name: "Work",
    },
    {
      name: "Personal",
    },
    {
      name: "Study",
    },
    {
      name: "Pets",
    },
  ];

  const colors = [
    "bg-pastel-blue",
    "bg-bubblegum",
    "bg-lime-yellow",
    "bg-mint-green",
    "bg-muted-yellow",
    "bg-light-violet",
    "bg-muted-blue",
    "bg-peachy-pink",
  ];

  const handleChange = (e) => {
    //destructure name,value & type from e.target
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,

      [name]: type === "checkbox" ? checked : value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      return;
    }

    const newNote = {
      id: Date.now(),
      color: colors[Math.floor(Math.random() * colors.length)],
      ...formData,
    };

    //add notes to state
    setNotes([newNote, ...notes]);

    //reset form data
    setFormData({
      title: "",
      category: "Work",
      priority: "High",
      description: "",
      isPinned: false,
    });

    //reset form to closed
    setIsVisible(false)

  };

  return (
    <>
      <div
        className="cursor-pointer absolute bottom-0 right-0"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <LuX size={64} color="white" className="z-100 relative" />
        ) : (
          <LuCirclePlus size={64} fill="black" color="white" />
        )}
      </div>

      {isVisible && (
        <div className="bg-gray-950/70 w-full h-screen absolute">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] lg:w-1/2 mx-auto p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-950 rounded-lg"
          >
            <h2 className="font-bold text-2xl pb-4">Add a new note</h2>
            <InputText
              value={formData.title}
              label="Title"
              onChange={handleChange}
              required
              name="title"
              placeholder="Enter Note Title"
            />
            <SelectInput
              value={formData.priority}
              label="Priority"
              onChange={handleChange}
              options={priorityOptions}
              name="priority"
            />
            <SelectInput
              value={formData.priority}
              label="Category"
              onChange={handleChange}
              options={categoryOptions}
              name="category"
            />
            <InputText
              value={formData.description}
              label="Description"
              onChange={handleChange}
              required
              type="area"
              name="description"
            />
            <InputCheckbox
              value={formData.isPinned}
              label="Do you want to pin it?"
              onChange={handleChange}
              defaultChecked={false}
              name="isPinned"
            />
            <button className="mb-4 bg-gray-950 text-white rounded-lg py-2 px-4 hover:bg-gray-500 transition cursor-pointer">
              Add note
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default NoteForm;
