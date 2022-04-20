import React from "react";
import st from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                <div className={st.dialog}>XIII</div>
                <div className={st.dialog}>kamatoz</div>
                <div className={st.dialog}>Babii</div>
                <div className={st.dialog}>Xsu</div>
            </div>
            <div className={st.messages}>
                <div className={st.message}>hi</div>
                <div className={st.message}>how ae you&</div>
                <div className={st.message}>hello</div>
                <div className={st.message}>omg</div>
            </div>
        </div>
    );
}

export default Dialogs;