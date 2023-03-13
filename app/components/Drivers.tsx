import React from 'react'
import { User } from '../../utils/typings';
import { H3 } from './Heading'
import Whitebox from './Whitebox';
type Props = {
    active: boolean;
    drivers: User[];
}
function Drivers({ active, drivers }: Props) {
    return (
        <div className='px-4'>
            {active ? <H3 className='text-green-500'>Идэвхитэй</H3> : <H3 className='text-red-500'>Идэвхгүй</H3>}
            <div className='flex flex-col gap-2 justify-between items-center'>
                {drivers.map(driver => (
                    <Whitebox key={driver.firstName+driver.lastName} className='flex p-4 gap-2 justify-between items-center'>
                        <img
                            className='w-16 h-16 rounded-lg'
                            src='https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg' />
                        <div className='flex'>
                            <H3>{driver.firstName} {driver.lastName}</H3>
                        </div>
                    </Whitebox>
                ))}
            </div>
        </div>
    )

}

export default Drivers