function Footer() {
    return (
      <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
              aria-label="Brand logo"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold">Brand Name</span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900">Producto</h3>
              <ul className="space-y-1">
                <li><a href="#" aria-label="Características">Características</a></li>
                <li><a href="#" aria-label="Integraciones">Integraciones</a></li>
                <li><a href="#" aria-label="Precios">Precios</a></li>
                <li><a href="#" aria-label="Preguntas frecuentes">Preguntas frecuentes</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900">Compañía</h3>
              <ul className="space-y-1">
                <li><a href="#" aria-label="Privacidad">Privacidad</a></li>
                <li><a href="#" aria-label="Condiciones de servicio">Condiciones de servicio</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900">Desarrolladores</h3>
              <ul className="space-y-1">
                <li><a href="#" aria-label="API pública">API pública</a></li>
                <li><a href="#" aria-label="Documentación">Documentación</a></li>
                <li><a href="#" aria-label="Guías">Guías</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900">Redes sociales</div>
              <div className="flex justify-start space-x-3">
                <a href="#" title="Facebook" className="flex items-center p-1" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a href="#" title="Twitter" className="flex items-center p-1" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
                <a href="#" title="Instagram" className="flex items-center p-1" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.709 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.396 2.176 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.709-0.084 2.865-0.349 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.781 1.849-2.833 0.396-1.020 0.661-2.176 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.709-0.349-2.865-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.781-1.443-2.833-1.849-1.020-0.396-2.176-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2c4.166 0 4.639 0.019 6.078 0.088 1.263 0.065 2.307 0.292 3.223 0.608 0.917 0.316 1.661 0.759 2.319 1.417 0.659 0.659 1.101 1.402 1.417 2.319 0.316 0.916 0.543 1.96 0.608 3.223 0.069 1.439 0.088 1.912 0.088 6.078s-0.019 4.639-0.088 6.078c-0.065 1.263-0.292 2.307-0.608 3.223-0.316 0.917-0.759 1.661-1.417 2.319-0.659 0.659-1.402 1.101-2.319 1.417-0.916 0.316-1.96 0.543-3.223 0.608-1.439 0.069-1.912 0.088-6.078 0.088s-4.639-0.019-6.078-0.088c-1.263-0.065-2.307-0.292-3.223-0.608-0.917-0.316-1.661-0.759-2.319-1.417-0.659-0.659-1.101-1.402-1.417-2.319-0.316-0.916-0.543-1.96-0.608-3.223-0.069-1.439-0.088-1.912-0.088-6.078s0.019-4.639 0.088-6.078c0.065-1.263 0.292-2.307 0.608-3.223 0.316-0.917 0.759-1.661 1.417-2.319 0.659-0.659 1.402-1.101 2.319-1.417 1.020-0.396 2.176-0.661 3.223-0.608 1.439 0.069 1.912 0.088 6.078 0.088zM16 7a9 9 0 100 18 9 9 0 000-18z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  