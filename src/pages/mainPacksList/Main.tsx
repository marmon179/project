import React from "react";
import s from "./Main.module.scss"
import Title from "../../components/common/title/Title";


export const PacksList = (props: any) => {
    return (
        <div className={s.packsList}>
            <aside className={s.aside}>
                <div className={s.blockFilter}>
                    <span>Show packs cards</span>
                    <button>My</button>
                    <button>All</button>
                    <span>Number of cards</span>
                    Ползунок туда сюда
                </div>
            </aside>
            <main className={s.main}>
                <Title title="Packs list"/>
                <input type="search"  value="Search..."
                       aria-label="Search through site content" />
                <button>Add new pack</button>
            </main>
        </div>
    );
};

export default PacksList;