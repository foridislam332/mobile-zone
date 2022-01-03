import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from 'react-bootstrap';
import './Cart.css';

const closeIcon = <FontAwesomeIcon icon={faTimes} />;

const Cart = ({ product }) => {
    const { _id, name, price, picture } = product;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    const handleDeleteOrder = id => {
        const url = `https://safe-coast-68587.herokuapp.com/saveProduct/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                }
            })
            .finally(setShow(false))
    };
    return (
        <>
            <tr>
                <td className="d-flex align-items-center">
                    <img style={{ width: '50px', marginLeft: '15px' }} src={picture} alt="" />
                    <span style={{ marginLeft: '15px', fontWeight: '600' }}>{name}</span>
                </td>
                <td>
                    <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '50%', Left: '50%', transform: 'translate(-50%, 80%)' }}>${price}</span>
                    </div>
                </td>
                <td>
                    <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '50%', Left: '50%', transform: 'translate(-50%, 80%)' }}>01</span>
                    </div>
                </td>
                <td>
                    <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 80%)' }}>${price}</span>
                    </div>
                </td>
                <td>
                    <div style={{ position: 'relative' }}>
                        <span onClick={() => { setShow(true); }} className="cancel_btn" style={{ position: 'absolute', top: '19px', left: '0' }}>{closeIcon}</span>
                    </div>
                </td>
            </tr>
            {/* Confirmation alert */}
            < Modal show={show} onHide={handleClose} >
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                </div>
                <Modal.Body>Are you sure you want to delete this product from add to cart?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { handleDeleteOrder(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="primary" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
};

export default Cart;