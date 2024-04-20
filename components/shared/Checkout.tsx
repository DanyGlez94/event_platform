import { IEvent } from '@/lib/database/models/events.model'
import React from 'react'
import { Button } from '../ui/button';

const Checkout = ({ event, userId }: { event: IEvent, userId: string }) => {

  const onCheckOut = async () => {
    console.log('Checking out');
  }

  return (
    <form action={onCheckOut} method='post'>
      <Button type='submit' role='link' size='lg' className='button sm:w-fit'>
        {event.isFree ? 'Get Tickets' : 'Buy Ticket'}
      </Button>
    </form>
  )
}

export default Checkout