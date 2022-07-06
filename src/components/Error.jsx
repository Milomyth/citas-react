function Error({children}) {
    return (   
        <div className="bg-red-700 text-white uppercase text-center p-3 font-bold rounded-md">
            <p>
              {children}
            </p>
        </div>
     );
}

export default Error;