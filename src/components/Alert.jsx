export default function Alert({title, subtext}){
  return (
  <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 z-40" role="alert">
    <span class="font-medium">{title}</span> {subtext}
  </div>
  )
}