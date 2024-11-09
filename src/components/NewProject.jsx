import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = (props) => {
  const { onAdd,onCancle } = props;

  const titleRef = useRef();
  const modalRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    console.log("asasd");
    const titleValue = titleRef?.current?.value;
    const descriptionValue = descriptionRef?.current?.value;
    const dueDateValue = dueDateRef?.current?.value;
    console.log(titleValue);

    if (
      titleValue.trim() === "" ||
      descriptionValue.trim() === "" ||
      dueDateValue.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue,
    });
  };
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okey">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Oops... looks like you forgot to enter a value.</p>
        <p className="text-stone-400 mb-4">Please make sure you provide a valid value </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancle}>
              cancle
            </button>
          </li>
          <li>
            {" "}
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" isTextarea={true} />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
