import { useEffect, useState } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

import { IReservations, IDataFormReservation } from 'lib/types'

import { rules } from './formConfig'

interface ISelectWorshipProps {
  reservations: IReservations
  registerInputForm: UseFormRegister<IDataFormReservation>
  setValueFormInput: UseFormSetValue<IDataFormReservation>
  errorsInputForm: {
    [x: string]: any
  }
}

// La logica de este componente se puede mejorar
export const SelectWorship = ({ reservations, registerInputForm, errorsInputForm, setValueFormInput }: ISelectWorshipProps) => {
  const [worships, setWorship] = useState([
    // {
    //   id: reservations.FIRST_WORSHIP.id,
    //   label: reservations.FIRST_WORSHIP.label,
    //   reservations: reservations.FIRST_WORSHIP.total,
    //   schedule: reservations.FIRST_WORSHIP.schedule,
    //   isAviable: reservations.FIRST_WORSHIP.total < reservations.MAX_RESERVATIONS,
    // },
    {
      id: reservations.SECOND_WORSHIP.id,
      label: reservations.SECOND_WORSHIP.label,
      reservations: reservations.SECOND_WORSHIP.total,
      schedule: reservations.SECOND_WORSHIP.schedule,
      isAviable: reservations.SECOND_WORSHIP.total < reservations.MAX_RESERVATIONS
    },
    {
      id: reservations.THIRD_WORSHIP.id,
      label: reservations.THIRD_WORSHIP.label,
      reservations: reservations.THIRD_WORSHIP.total,
      schedule: reservations.THIRD_WORSHIP.schedule,
      isAviable: reservations.THIRD_WORSHIP.total < reservations.MAX_RESERVATIONS
    }
  ])

  // useEffect(() => {
  //   if (reservations.FIRST_WORSHIP.total >= reservations.MAX_RESERVATIONS) {
  //     if (reservations.SECOND_WORSHIP.total < reservations.MAX_RESERVATIONS) setValueFormInput('worship', 'SECOND_WORSHIP')
  //     else if (reservations.THIRD_WORSHIP.total < reservations.MAX_RESERVATIONS) setValueFormInput('worship', 'THIRD_WORSHIP')
  //     else return;
  //   }
  // }, [reservations.FIRST_WORSHIP.total])

  useEffect(() => {
    if (reservations.SECOND_WORSHIP.total >= reservations.MAX_RESERVATIONS) {
      if (reservations.FIRST_WORSHIP.total < reservations.MAX_RESERVATIONS) setValueFormInput('worship', 'FIRST_WORSHIP')
      else if (reservations.THIRD_WORSHIP.total < reservations.MAX_RESERVATIONS) setValueFormInput('worship', 'THIRD_WORSHIP')
      else;
    }
  }, [reservations.SECOND_WORSHIP.total])

  useEffect(() => {
    if (reservations.THIRD_WORSHIP.total >= reservations.MAX_RESERVATIONS) {
      if (reservations.SECOND_WORSHIP.total < reservations.MAX_RESERVATIONS) setValueFormInput('worship', 'SECOND_WORSHIP')
      else if (reservations.FIRST_WORSHIP.total < reservations.MAX_RESERVATIONS) setValueFormInput('worship', 'FIRST_WORSHIP')
      else;
    }
  }, [reservations.THIRD_WORSHIP.total])

  useEffect(() => {
    setWorship([
      // {
      //   id: 'FIRST_WORSHIP',
      //   label: reservations.FIRST_WORSHIP.label,
      //   reservations: reservations.FIRST_WORSHIP.total,
      //   schedule: reservations.FIRST_WORSHIP.schedule,
      //   isAviable: reservations.FIRST_WORSHIP.total < reservations.MAX_RESERVATIONS,
      // },
      {
        id: 'SECOND_WORSHIP',
        label: reservations.SECOND_WORSHIP.label,
        reservations: reservations.SECOND_WORSHIP.total,
        schedule: '1er Servicio (10:15 a.m)', // reservations.SECOND_WORSHIP.schedule
        isAviable: reservations.SECOND_WORSHIP.total < reservations.MAX_RESERVATIONS
      },
      {
        id: 'THIRD_WORSHIP',
        label: reservations.THIRD_WORSHIP.label,
        reservations: reservations.THIRD_WORSHIP.total,
        schedule: '2do Servicio (12:30 p.m)', // reservations.THIRD_WORSHIP.schedule
        isAviable: reservations.THIRD_WORSHIP.total < reservations.MAX_RESERVATIONS
      }
    ])
  }, [reservations])

  return (
    <>
      {errorsInputForm.worship && <p className='text-red-600'>{errorsInputForm.worship.message}</p>}
      <fieldset className='flex flex-col justify-center items-center sm:flex-row text-sm'>
        {
          worships.map((worship, idx) => {
            if (worship.isAviable) {
              return (
                <div key={worship.id} className='selectItemRadio'>
                  <label>
                    <input
                      tabIndex={3 + idx}
                      type='radio'
                      name='worship'
                      id='worship'
                      {...registerInputForm('worship', rules.worship)}
                      value={worship.id}
                    />
                    <span className='font-bold'>{worship.schedule}</span>
                  </label>
                </div>
              )
            } else {
              return (
                <div className='selectItemRadio font-bold' key={worship.id}>
                  <span>{worship.label}</span> <br />
                  <small className='text-red-600 select-none'>No Disponible</small>
                </div>
              )
            }
          })
        }
      </fieldset>
    </>
  )
}
