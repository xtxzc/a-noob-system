const seatsWrapper = document.querySelector('.seats-wrapper');
const ticketContainer = document.querySelector('.ticket-container');
const hasTicket = document.querySelector('.has-ticket');
const noTicket = document.querySelector('.no-ticket');
const totalPrice = document.querySelector('.price');

window.addEventListener('load', function() {
  generateSeats(seatsWrapper);
  seatsWrapper.addEventListener('click', function(e) {
    if (
      e.target.classList.contains('seat') &&
      !e.target.classList.contains('sold')
    ) {
      let selectedSeat = e.target;
      const rowID = selectedSeat.getAttribute('data-row-id');
      const columnID = selectedSeat.getAttribute('data-column-id');

      selectedSeat.classList.toggle('selectable');
      selectedSeat.classList.toggle('selected');

      if (!selectedSeat.classList.contains('selected')) {
        seatID = rowID + '-' + columnID;
        console.log(seatID, document.getElementById(seatID));
        ticketContainer.removeChild(document.getElementById(seatID));
      } else {
        ticketContainer.appendChild(generateTicket(rowID, columnID));
      }

      const slectedNum = document.querySelectorAll('.seats-wrapper .selected');
      if (slectedNum.length) {
        noTicket.style.display = 'none';
        hasTicket.style.display = 'block';
        totalPrice.textContent = parseInt(slectedNum.length * 31);
      } else {
        noTicket.style.display = 'block';
        hasTicket.style.display = 'none';
        totalPrice.textContent = 0;
      }
    }
  });
});

function generateSeats(el) {
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 1; j <= 12; j++) {
      const seat = document.createElement('div');
      seat.className = 'seat selectable';
      seat.setAttribute('data-row-id', i);
      seat.setAttribute('data-column-id', leadingZero(j));
      row.appendChild(seat);
    }
    el.appendChild(row);
  }
}

function generateTicket(row, column) {
  const ticket = document.createElement('span');
  ticket.className = 'ticket';
  ticket.setAttribute('data-row-id', row);
  ticket.setAttribute('data-column-id', leadingZero(column));
  ticket.setAttribute('id', row + '-' + column);
  ticket.textContent = `${row}排${column}座`;
  return ticket;
}

function leadingZero(num) {
  return num < 10 ? '0' + num : num;
}
