import React from "react";
import st from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialog/" + props.id;
  return (
      <div className={st.dialog + ' ' + st.active}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  );
}

const Message = (props) => {
  return (
      <div className={st.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>

                <DialogItems name="XIII" id="1"/>
                <DialogItems name="kamatoz" id="2"/>
                <DialogItems name="Babii" id="3"/>
                <DialogItems name="Xsu" id="4"/>
            </div>
            <div className={st.messages}>
                <Message message="Hi" />
                <Message message="how ae you&" />
                <Message message="hello" />
                <Message message="omg" />
            </div>
        </div>
    );
}

export default Dialogs;