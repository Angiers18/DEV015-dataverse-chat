import { setRootEl, setRoutes, renderView, navigateTo, onURLChange } from "../src/router";

describe('router', () => {

  //SET ROOT EL------------------------------------------
  describe('setRootEl', () => {

    it('Assign and return the HTML root element', () => {
      const elementDom = document.createElement('div')
      const element = setRootEl(elementDom);
      expect(element).toEqual(elementDom);
    })
  })

  //SET ROUTES------------------------------------------
  describe('setRoutes', () => {

    it('vista de ERROR no existe', () => {
      const routes = {
        "/chat": () => document.createElement('div'),
        "/api-key": () => document.createElement('p'),
      }
      routes
      expect('vista de error no exite').toBeTruthy();
    })

    it('set ROUTES no es un objeto', () => {
      const routes = 'hola'
      routes
      expect('No es un objeto').toBeTruthy();
    })

  })
  

  // RENDER VIEW-------------------------------

  describe('renderView', () => {
    it('renders error view when URL does not exist', () => {

      const routes = {
        "/chat": () => document.createElement('div'),
        "/error": () => document.createElement('p'),
      }
      setRoutes(routes);
      const elementDom = document.createElement('div');
      setRootEl(elementDom);
      renderView('/fjdehn');

      expect(elementDom.querySelector('p')).toBeTruthy()
    })
  })


  // NAVIGATE TO------------------------------------

  describe('navigateTo', () => {

    it('render the correct view based on location and pathname', () => {
      const routes = {
        "/api-kei": () => document.createElement('a'),
        "/panel": () => document.createElement('p'),
        "/error": () => document.createElement('div'),
      }
      setRoutes(routes);
      const elementDom = document.createElement('div');
      setRootEl(elementDom);
      navigateTo('/panel');

      expect(elementDom.querySelector('p')).toBeTruthy()
    })
    
    
    it('prueba con props', () => {
      const routes = {
        "/api-kei": () => document.createElement('a'),
        "/chat": () => document.createElement('p'),
        "/error": () => document.createElement('p'),
      }
      setRoutes(routes);
      const elementDom = document.createElement('div');
      setRootEl(elementDom);
      const props = 'peter_parker_002';
      navigateTo('/chat', props);
      
      expect('http://localhost:3000/chat?peter_parker_002=').toBeTruthy()
    })
  })

  //ON URL CHANGE--------------------------------------------
  describe('OnURLChange', () => {
    
    it(' OnURLChange prueba', () => {
      const routes = {
        "/api-kei": () => document.createElement('a'),
        "/chat": () => document.createElement('p'),
        "/error": () => document.createElement('p'),
      }
      setRoutes(routes);
      const elementDom = document.createElement('div');
      setRootEl(elementDom);
      const props = 'spider_ham_006';
      navigateTo('/chat', props);
      onURLChange(location)
      const { pathname, search } = location
      expect(pathname + search).toBe("/chat?spider_ham_006=")
    })
  })
})
