export default (state = {}, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
   return {
    result: action.payload,
    submittedSuccess: true
   }
  default:
   return state
 }
}
