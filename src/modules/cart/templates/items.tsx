import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: HttpTypes.StoreCartLineItem[]
}

const ItemsTemplate = ({ items }: ItemsTemplateProps) => {
  return (
    <div>
      <div className="sm:pb-3 flex items-center">
        <Heading className="text-2xl font-semibold sm:text-[2rem] leading-[2.75rem] text-primary font-times">
          Giỏ hàng
        </Heading>
      </div>
      <Table>
        <Table.Header className="border-t-0">
          <Table.Row>
            <Table.HeaderCell className="!pl-0 text-base text-nowrap !pr-0 sm:!pr-6 !font-manrope-bold">
              Sản phẩm
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            {/* <Table.HeaderCell className="text-base text-nowrap">
              Số lượng
            </Table.HeaderCell> */}
            <Table.HeaderCell className="hidden small:table-cell text-base text-nowrap !font-manrope-bold !text-center">
              Giá
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-2 sm:!pr-6 text-right text-base text-nowrap !font-manrope-bold">
              Tổng tiền
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} />
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
