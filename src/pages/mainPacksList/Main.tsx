import React from "react";
import s from "./Main.module.scss"
import Title from "../../components/common/title/Title";
import SubTitle from "../../components/common/subTitle/SubTitle";
import {Button, Palette, Size} from "../../components/common/c2-SuperButton/Button";
import TableHeader from "../../components/common/tableHeader/TableHeader";
import TableRow from "../../components/common/tableRow/TableRow";



export const PacksList = (props: any) => {
    return (
        <div className={s.conteiner}>
            <div className={s.packsList}>
                <aside className={s.aside}>
                    <SubTitle title="Show packs cards" />
                    <form action="">
                        <input type="radio" name="switchCard" />
                        <input type="radio" name="switchCard" />
                    </form>
                    <SubTitle title="Number of cards" />
                    Ползунок туда сюда
                </aside>
                <main className={s.main}>
                    <Title title="Packs list" />
                    <form action="">

                        <input type="search" value="Search..."
                               aria-label="Search through site content" />
                        <Button size={Size.medium} palette={Palette.primary} title="Add new pack" />
                    </form>
                    <div className={s.tableInner}>
                    <TableHeader title1="Name" title2="Cards" title3="Last Updated" title4="Created by" title5="Action"/>
                    <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov" />
                        <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov" />
                        <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov" />
                        <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov" />
                        <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov" />
                        <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov" />
                        <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov" />
                        <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov" />



                    </div>
                </main>
            </div>
        </div>
    );
};

export default PacksList;