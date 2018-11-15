import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
    isOpen={!!props.selectedOption}
    onRequestClose={props.selectedOptionCleared}
    contentLabel="Selected Option"
    closeTimeoutMs={200}
    className="modal"
    >
    <h3>TEST</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.selectedOptionCleared}>Okay</button>
        
    
    </Modal>
);
export default OptionModal;

