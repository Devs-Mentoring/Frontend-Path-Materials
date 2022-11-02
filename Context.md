CONTEXT - EXAMPLE

```
const UserContext = createContext(undefined);
 
export const UserProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  return (
    <userContext.Provider
      value={{
        isAuthorized,
        setIsAuthorized
      }}
    >
      {children}
    </userContext.Provider>
  );
};
 
export const useUserContext = () => {
  const ctx = useContext(userContext);
 
  if (!ctx) {
    throw new Error("Missing userContext, it's not wrapped in UserProvider");
  }
  return ctx;
};
``` 

Użycie w komponencie lub hooku:

```
const { isAuthorized, setIsAuthorized} = useUserContext();
```