import Link from "next/link";

type ProductsPaginationProps = {
    pages: number,
    totalPages: number
}

export default function ProductsPagination({pages, totalPages}: ProductsPaginationProps) {

    const pagesIcon = Array.from({length: totalPages}, (_, i) => i + 1)

  return (
    <nav className="flex justify-center py-10">

        {pages > 1 && (
            <Link
                href={`/admin/products?page=${pages - 1}`}
                className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
            >&laquo;</Link>
        )}

        {pagesIcon.map(page => (
            <Link
                href={`/admin/products?page=${page}`}
                className={`${pages === page ? 'bg-slate-200' : 'bg-white'} px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
            >{page}</Link>
        ))}

        {pages < totalPages && (
            <Link
                href={`/admin/products?page=${pages + 1}`}
                className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
            >&raquo;</Link>
        )}
    </nav>
  )
}
