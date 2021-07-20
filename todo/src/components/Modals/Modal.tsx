import React from "react";
import ReactDOM from "react-dom";
import { IModalProps } from "./IModalProps";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal: React.FC<IModalProps> = ({
  modalTitle: title,
  firstbtnTitle,
  secondbtnTitle,
  onCancel,
  onSubmit,
  children,
}) => {
  const element = (
    <div className="modalOverlay">
      <div className="modalWindow">
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
          <div>
            <button onClick={onCancel}>
              <FontAwesomeIcon icon={faTimes} color="#3F72AF" size="2x" />
            </button>
          </div>
        </div>
        <div className="modalBody">{children}</div>
        <div className="modalFooter">
          <button className="modalFooter-button-onSubmit" onClick={onSubmit}>
            {firstbtnTitle}
          </button>
          <button className="modalFooter-button-onClose" onClick={onCancel}>
            {secondbtnTitle}
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(element, document.body);
};

export default Modal;

// const DeleteButton: React.FC<{
//   modalTitle: string;
//   children: JSX.Element;
//   item: IListElement;
//   clickHandler: (item: IListElement) => void;
// }> = ({
//   modalTitle,
//   children,
//   item = {
//     itemTitle: <></>,
//     description: "",
//     type: "",
//   },
//   clickHandler,
// }) => {
//   const { isOpen, toggle } = useModal();
//   const dispatch = useDispatch();

//   const onSubmit = () => {
//     toggle();

//     dispatch(
//       clickHandler({
//         itemTitle: item.itemTitle,
//         description: item.description,
//         type: item.type,
//       })
//     );
//   };
//   const onCancel = () => toggle();
//   return (
//     <span>
//       <button className="button1 button2" onClick={toggle}>
//         <FontAwesomeIcon icon={faTrash} color="#3F72AF" size="lg" />
//       </button
//       <Modal
//         modalTitle={modalTitle}
//         firstbtnTitle="Да"
//         secondbtnTitle="Нет"
//         children={<div>{children}</div>}
//         isOpen={isOpen}
//         onCancel={onCancel}
//         onSubmit={onSubmit}
//       />
//     </span>
//   );
// };

/* <CreateButton
          buttonTitle="Добавить категорию"
          modalTitle="Создание категории"
          children={
            <>
              <form>
                <div>
                  <fieldset className="name2">
                    <legend>Имя</legend>
                    <input
                      placeholder="Введите имя задачи"
                      value={itemTitle}
                      onInput={handleTitleChange(setItemTitle)}
                    ></input>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="description">
                    <legend>Описание</legend>
                    <input
                      placeholder="Введите описание задачи"
                      value={itemDescription}
                      onInput={handleDecriptionChange(setItemDescription)}
                    ></input>
                  </fieldset>
                </div>
              </form>
            </>
          }
          item={{
            itemTitle: <TaskTitle name={itemTitle}/>,
            description: itemDescription,
            type: 'category'
          }}
          clickHandler = {addCategory}
        />
      </div> */

// <div className="actionmenu">
//   <CreateButton
//     buttonTitle="Добавить задачу"
//     modalTitle="Создание задачи"
//     children={
//       <>
//         <form>
//           <div>
//             <fieldset className="name1">
//               <legend>Имя</legend>
//               <input
//                 placeholder="Введите имя задачи"
//                 value={itemTitle}
//                 onInput={handleTitleChange(setItemTitle)}
//               ></input>
//             </fieldset>
//             <span>
//               <fieldset className="category">
//                 <legend>Категория</legend>
//                 <select
//                   value={itemCategory}
//                   onInput={handleAttachementChange(setItemAttachment)}
//                 >
//                   <option value="default" selected>
//                     Выберите категорию
//                   </option>
//                   {categoriesList}
//                 </select>
//               </fieldset>
//             </span>
//           </div>
//           <div>
//             <fieldset className="description">
//               <legend>Описание</legend>
//               <input
//                 placeholder="Введите описание задачи"
//                 value={itemDescription}
//                 onInput={handleDecriptionChange(setItemDescription)}
//               ></input>
//             </fieldset>
//           </div>
//         </form>
//       </>
//     }
//     item={{
//       itemTitle: <TaskTitle name={itemTitle} category={itemCategory} />,
//       description: itemDescription,
//       type: "task",
//     }}
//     clickHandler={addTask}
//   />
// </div>
