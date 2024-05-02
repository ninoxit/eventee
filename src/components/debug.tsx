import 'bootstrap/dist/css/bootstrap.css';

export function DebugComponent() {
  return (
    <div className='container'>
      <h1 className='text-center'>Botones</h1>
      <div className="row">
        <div className="col">
          <button className='btn btn-primary w-100'>Primary</button>
        </div>
        <div className="col">
          <button className='btn btn-secondary w-100'>Secondary</button>
        </div>
        <div className="col">
          <button className='btn btn-success w-100'>Success</button>
        </div>
        <div className="col">
          <button className='btn btn-warning w-100'>Warning</button>
        </div>
        <div className="col">
          <button className='btn btn-danger w-100'>Danger</button>
        </div>
        <div className="col">
          <button className='btn btn-info w-100'>Info</button>
        </div>
        <div className="col">
          <button className='btn btn-dark w-100'>Dark</button>
        </div>
        <div className="col">
          <button className='btn btn-light w-100'>Light</button>
        </div>
      </div>
    </div>
  );
}
