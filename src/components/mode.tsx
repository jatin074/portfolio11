'use client'
export default function Mode() {
    return (
        <button
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
            onClick={() => document.documentElement.classList.toggle("dark")}
        >
            Toggle Dark Mode
        </button>
    );
}
