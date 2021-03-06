import React, {useState} from 'react';
import {Button, Palette, Size} from '../../../components/common/c2-SuperButton/Button';
import {ModalAddNewPackContainer} from './modalAddNewPack/ModalAddNewPackContainer';

export const AddNewPack = React.memo(() => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <Button
                size={Size.medium}
                palette={Palette.primary}
                title="Add new pack"
                onClick={() => setShow(true)}
            />
            <ModalAddNewPackContainer
                show={show}
                close={() => setShow(false)}
                backgroundOnClick={() => setShow(false)}
            />
        </div>
    );
})

