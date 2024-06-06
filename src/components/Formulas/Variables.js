import React, { useState } from 'react';
import "/src/css/FormulaEditor.css";
import EditIcon from "/markup/img/edit-icon.svg";
import CheckIcon from "/markup/img/check-icon.svg";

function VariablesItem({ variable, description, onEdit }) {
  return (
    <div className='variables-item__wrap'>
      <p className="formula__variables_item">{variable} - {description}</p>
      <button type='button' className="edit-formula-btn" onClick={() => onEdit(variable, description)}>
        <img src={EditIcon} alt="Редактировать переменную" className="variables__edit-icon"/>
      </button>
    </div>
  );
}

function NewVariable({ onSave }) {
  const [newVar, setNewVar] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleSave = () => {
    if (newVar.trim() && newDesc.trim()) {
      onSave(newVar, newDesc);
      setNewVar("");
      setNewDesc("");
    }
  };

  return (
    <div className='variables__new-var_wrap'>
      <p className="formula__new-var">
        <input
          className="formula__variables_item input-var"
          type="text"
          placeholder="x"
          value={newVar}
          onChange={(e) => setNewVar(e.target.value)}
        />
        - 
        <input
          className="formula__variables_item input-text"
          type="text"
          placeholder="введите пояснение к аргументу..."
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
      </p>
      <button type='button' className="edit-formula-btn" onClick={handleSave}>
        <img src={CheckIcon} alt="Сохранить переменную" className="variables__edit-icon"/>
      </button>
    </div>
  );
}

export default function Variables({ variables, onVariablesChange }) {
  const [editingVar, setEditingVar] = useState(null);
  const [editingDesc, setEditingDesc] = useState("");

  const handleAddVariable = (newVar, newDesc) => {
    const updatedVariables = { ...variables, [newVar]: newDesc };
    onVariablesChange(updatedVariables);
  };

  const handleEditVariable = (variable, description) => {
    setEditingVar(variable);
    setEditingDesc(description);
  };

  const handleUpdateVariable = () => {
    if (editingVar.trim() && editingDesc.trim()) {
      const updatedVariables = { ...variables, [editingVar]: editingDesc };
      onVariablesChange(updatedVariables);
      setEditingVar(null);
      setEditingDesc("");
    }
  };

  return (
    <>
      <div className="formula__variables">
        {Object.entries(variables).map(([variable, description]) => (
          <VariablesItem
            key={variable}
            variable={variable}
            description={description}
            onEdit={handleEditVariable}
          />
        ))}
      </div>

      {editingVar ? (
        <div className='variables__new-var_wrap'>
          <p className="formula__new-var">
            <input
              className="formula__variables_item input-var"
              type="text"
              value={editingVar}
              disabled
            />
            - 
            <input
              className="formula__variables_item input-text"
              type="text"
              value={editingDesc}
              onChange={(evt) => setEditingDesc(evt.target.value)}
            />
          </p>
          <button type='button' className="edit-formula-btn" onClick={handleUpdateVariable}>
            <img src={CheckIcon} alt="Обновить переменную" className="variables__edit-icon"/>
          </button>
        </div>
      ) : (
        <NewVariable onSave={handleAddVariable} />
      )}
    </>
  );
}
