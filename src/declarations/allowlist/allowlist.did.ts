export const idlFactory = ({ IDL } : any) => {
  return IDL.Service({
    'queryAddress' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL } : any) => { return []; };
