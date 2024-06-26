const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
}

let notes = [
    {
        id: 1,
        title: 'Babel',
        body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
        archived: false,
        createdAt: showFormattedDate('2024-05-20')
    },
    {
        id: 2,
        title: 'Functional Component',
        body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
        archived: false,
        createdAt: showFormattedDate('2024-05-22')
    },
    {
        id: 3,
        title: 'Modularization',
        body: 'Dalam konteks pemrograman JavaScript, modularization merupakan proses memecah atau menggunakan kode dalam berkas JavaScript secara terpisah menjadi bagian yang berbeda.',
        archived: false,
        createdAt: showFormattedDate('2024-05-22')
    },
        {
        id: 4,
        title: 'Lifecycle',
        body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya.',
        archived: false,
        createdAt: showFormattedDate('2024-05-25')
    },
    {
        id: 5,
        title: 'ESM',
        body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
        archived: false,
        createdAt: showFormattedDate('2024-06-01')
    },
    {
        id: 6,
        title: 'Module Bundler',
        body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
        archived: false,
        createdAt: showFormattedDate('2024-06-02')
    }
]

function getNotes() {
    return notes
}

function addNote(title, body) {
    notes = [
        {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: showFormattedDate(Date())
        },
        ...notes
    ]
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id)
}

function archiveNote(id) {
    notes = notes.map((note) => {
        if(note.id === id) {
            return {
                ...note,
                archived: true
            }
        } else {
            return note
        }
    })
}

function unarchiveNote(id) {
    notes = notes.map((note) => {
        if(note.id === id) {
            return {
                ...note,
                archived: false
            }
        } else {
            return note
        }
    })
}

function getNote(id) {
    return notes.find(note => Number(note.id) === id)
}

export { getNotes, addNote, deleteNote, archiveNote, unarchiveNote, getNote }