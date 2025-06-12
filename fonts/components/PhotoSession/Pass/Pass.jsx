import React from "react";
import s from "./Pass.module.css";
import StepsColumn from "./Steps/StepsColumn";

export default function Pass() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>КАК ПРОХОДИТ ФОТОСЕССИЯ</h1>
      {/* Переносим линию внутрь блока pass */}
      <div className={s.pass}>
        <div className={s.line}></div>
        <StepsColumn />
      </div>
    </div>
  );
}
