import React, {useState} from 'react'
import {Button, Palette, Variant} from '../c2-SuperButton/Button';


export const Paginator: React.FC<PropsType> = ({
                                                   cardPacksTotalCount, pageSize,
                                                   currentPage = 1,
                                                   onPageChanged = x => x,
                                                   portionSize = 10
                                               }) => {

    let pagesCount = Math.ceil(cardPacksTotalCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div
            // className={cn(styles.paginator)}
        >
            {portionNumber > 1 &&
            <Button
                palette={Palette.secondary}
                variant={Variant.primary}
                onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}
            >
                PREV
            </Button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <Button
                            // className={cn({
                            //     [styles.selectedPage]: currentPage === p
                            // }, styles.pageNumber)}
                            // className={styles.selectedPage}
                            style={currentPage !== p ? {backgroundColor: 'transparent'} : {}}
                            key={p}
                            onClick={() => {
                                onPageChanged(p);
                            }}
                            palette={Palette.primary}
                            variant={Variant.primary}
                        >
                            {p}
                        </Button>
                    )
                })}
            {portionCount > portionNumber &&
            <Button
                palette={Palette.default}
                variant={Variant.primary}
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}
            >
                NEXT
            </Button>}


        </div>
    )
}
//types
type PropsType = {
    cardPacksTotalCount: number
    pageSize: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
}