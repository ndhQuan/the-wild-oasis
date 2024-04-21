import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   function onCloseModal() {
//     setIsOpenModal(false);
//   }

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>

//       {isOpenModal && (
//         <Modal onCloseModal={onCloseModal}>
//           <CreateCabinForm onCloseModal={onCloseModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
