export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'queryAddress' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
