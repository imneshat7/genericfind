import { useState, useRef } from 'react';

export default function UploadCard({ onUpload }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'application/pdf'];

  function handleFile(f) {
    if (!f) return;
    if (!acceptedTypes.includes(f.type)) {
      alert('Please upload a PNG, JPG, JPEG, WEBP, or PDF file.');
      return;
    }
    setFile(f);
    if (f.type.startsWith('image/')) {
      const url = URL.createObjectURL(f);
      setPreview(url);
    } else {
      setPreview(null);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    handleFile(f);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setDragOver(true);
  }

  function handleDragLeave() {
    setDragOver(false);
  }

  function handleChange(e) {
    handleFile(e.target.files[0]);
  }

  function handleSubmit() {
    if (file) onUpload(file);
  }

  function handleRemove(e) {
    e.stopPropagation();
    setFile(null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div className="card-glass rounded-2xl p-6 sm:p-8 flex flex-col">
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-dark text-base">Upload Prescription</h3>
          <p className="text-xs text-gray-text">PNG, JPG, WEBP, or PDF</p>
        </div>
      </div>

      {/* Drop Zone */}
      <div
        className={`drop-zone flex-1 flex flex-col items-center justify-center p-6 cursor-pointer min-h-[160px] ${dragOver ? 'drag-over' : ''}`}
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".png,.jpg,.jpeg,.webp,.pdf"
          className="hidden"
          onChange={handleChange}
        />

        {file ? (
          <div className="flex flex-col items-center gap-3 w-full">
            {preview ? (
              <img src={preview} alt="Preview" className="w-full max-h-[120px] object-contain rounded-lg" />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            )}
            <div className="text-center">
              <p className="text-sm font-semibold text-dark truncate max-w-full">{file.name}</p>
              <p className="text-xs text-gray-text">{(file.size / 1024).toFixed(1)} KB</p>
            </div>
            <button
              onClick={handleRemove}
              className="text-xs text-danger-500 hover:text-danger-400 font-medium transition-colors"
            >
              Remove file
            </button>
          </div>
        ) : (
          <>
            <div className="w-14 h-14 rounded-full bg-primary-100/60 flex items-center justify-center mb-3">
              <svg className="w-7 h-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-dark mb-1">Drop your prescription here</p>
            <p className="text-xs text-gray-text">or click to browse files</p>
          </>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!file}
        className={`btn-primary mt-5 w-full flex items-center justify-center gap-2 ${!file ? 'opacity-40 cursor-not-allowed' : ''}`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Analyze Prescription
      </button>
    </div>
  );
}
