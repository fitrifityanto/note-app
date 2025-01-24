import { showLoading, hideLoading } from '../utils.js'
const Swal = require('sweetalert2')

const baseUrl = 'https://notes-api.dicoding.dev/v2';


const getNote = async () => {
  const noteListContainerElement = document.querySelector('#noteListContainer')
  const noteListElement = noteListContainerElement.querySelector('#noteList')
  const listElement = noteListElement.querySelector('.list')

  const loading = document.querySelector('#note-loading');

  listElement.innerHTML = '';
  showLoading(loading);

  try {
    const response = await fetch(`${baseUrl}/notes`);
    const data = await response.json();
    const notes = data.data;

    if (data.error) {
      showResponseMessage(data.message, 'error')
    } else {
      displayNotes(notes)
    }

  } catch (error) {
     showResponseMessage(error, 'error')
  }
  finally {
    hideLoading(loading);
  }
};

const getArsip = async () => {
  const arsipListContainerElement = document.querySelector('#arsipListContainer');
  const arsipListElement = arsipListContainerElement.querySelector('#arsipList');
  const listElement = arsipListElement.querySelector('.list');

  const loading = document.querySelector('#arsip-loading');

  listElement.innerHTML = '';
  showLoading(loading);

  try {
    const response = await fetch(`${baseUrl}/notes/archived`);
    const data = await response.json();
    const arsipNotes = data.data;

    if (data.error) {
      showResponseMessage(data.message, 'error');
    } else {
      displayArsipNotes(arsipNotes);
    }
  } catch (error) {
    showResponseMessage(error.message, 'error');
  } finally {
    hideLoading(loading);
  }
};

const insertNote = async (note) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }

    const response = await fetch(`${baseUrl}/notes`, options);
    const data = await response.json();

    showResponseMessage(data.message, 'success')
    await getNote()
  } catch (error) {
    showResponseMessage(error, 'error');
  }
};

const archiveNote = async (noteId) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteId),
    }

    const response = await fetch(`${baseUrl}/notes/${noteId}/archive`, options);
    const data = await response.json();

    showResponseMessage(data.message, 'success')
    await getNote()
    await getArsip()
  } catch (error) {
    showResponseMessage(error, 'error');
  }
};

const unarchiveNote = async (noteId) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteId),
    }

    const response = await fetch(`${baseUrl}/notes/${noteId}/unarchive`, options);
    const data = await response.json();

    showResponseMessage(data.message, 'success')
    await getNote()
    await getArsip()
  } catch (error) {
    showResponseMessage(error, 'error');
  }
};

const removeNote = async (noteId) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }

    const response = await fetch(`${baseUrl}/notes/${noteId}`, options);
    const data = await response.json();

    showResponseMessage(data.message, 'success')
    await getNote()
    await getArsip()
  } catch (error) {
    showResponseMessage(error, 'error');
  }
};

const showResponseMessage = (message = 'Check your internet connection', type = 'info') => {
  const title =
    type === 'success' ? 'Success' :
    type === 'error' ? 'Error' :
    'Info'; 

  Swal.fire({
    title: title,
    text: message,
    icon: type, 
    confirmButtonText: 'OK',
    timer: 3000, 
    timerProgressBar: true, 
  });
};

const alertConfirm = async (message = 'Apakah Anda yakin?', confirmText = 'Ya', cancelText = 'Batal') => {
  const result = await Swal.fire({
    title: 'Konfirmasi',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    reverseButtons: true, 
  });

  return result.isConfirmed; 
};



const displayNotes = (notes) => {
  const containerElement = document.querySelector('#noteListContainer');
  const listElement = containerElement.querySelector('.list');

  listElement.innerHTML = '';

  notes.forEach((note) => {
    const noteItemElement = document.createElement('note-item');
    noteItemElement.note = note;

    const buttonContainer = noteItemElement.querySelector('.noteitem-button');

    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Arsipkan';
    archiveButton.classList.add('button-arsip')
    archiveButton.addEventListener('click', () => archiveNote(note.id));
    buttonContainer.appendChild(archiveButton);


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('button-delete')
    deleteButton.addEventListener('click', async () => {
      const isConfirmed = await alertConfirm('Yakin ingin menghapus catatan ini?', 'Hapus', 'batal');
      if (isConfirmed) removeNote(note.id);
    });
    buttonContainer.appendChild(deleteButton);

    listElement.appendChild(noteItemElement);
  });
};


const displayArsipNotes = (notes) => {
  const containerElement = document.querySelector('#arsipListContainer');
  const listElement = containerElement.querySelector('.list');

  listElement.innerHTML = '';

  notes.forEach((note) => {
    const noteItemElement = document.createElement('note-item');
    noteItemElement.note = note;

    const buttonContainer = noteItemElement.querySelector('.noteitem-button');

    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Batalkan Arsip';
    archiveButton.classList.add('button-arsip')
    archiveButton.addEventListener('click', () => unarchiveNote(note.id));
    buttonContainer.appendChild(archiveButton);


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('button-delete')
    deleteButton.addEventListener('click', async () => {
      const isConfirmed = await alertConfirm('Yakin ingin menghapus catatan ini?', 'Hapus', 'batal');
      if (isConfirmed) removeNote(note.id);
    });
    buttonContainer.appendChild(deleteButton);

    listElement.appendChild(noteItemElement);
  });
}


export { getNote, insertNote, getArsip }