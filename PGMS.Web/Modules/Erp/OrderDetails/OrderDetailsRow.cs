
using System.Collections.Generic;

namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[OrderDetails]")]
    [DisplayName("Order Details"), InstanceName("Order Details")]
    [ReadPermission(PermissionKeys.Orders.ReadPermission)]
    [UpdatePermission(PermissionKeys.Orders.UpdatePermission)]
    [DeletePermission(PermissionKeys.Orders.DeletePermission)]
    public sealed class OrderDetailsRow : Row, IIdRow
    {
        [DisplayName("Order Detail Id"), Identity]
        public Int32? OrderDetailId
        {
            get { return Fields.OrderDetailId[this]; }
            set { Fields.OrderDetailId[this] = value; }
        }

        [DisplayName("Product"), PrimaryKey, ForeignKey("[dbo].[Products]", "ProductId"), LeftJoin("jProduct"), TextualField("ProductName"), NotNull]
        [LookupEditor(typeof(ProductsRow), FilterField = "IsActive", FilterValue = 1, InplaceAdd = true, InplaceAddPermission = PermissionKeys.Products.UpdatePermission)]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Order"), PrimaryKey, ForeignKey("[dbo].[Orders]", "OrderId"), LeftJoin("jOrder"), TextualField("OrderShipName")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }
        [DisplayName("Unit Price"), Scale(4), NotNull, AlignRight, DisplayFormat("#,##0.00")]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Int16? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }
        [DisplayName("Discount"), NotNull, DefaultValue(0), AlignRight, DisplayFormat("#,##0.00")]
        public Int16? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Additional Costs"), NotNull, DefaultValue(0), AlignRight, DisplayFormat("#,##0.00")]
        public Int16? AdditionalCosts
        {
            get { return Fields.AdditionalCosts[this]; }
            set { Fields.AdditionalCosts[this] = value; }
        }

        [DisplayName("Product Name"), Expression("jProduct.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }
        [DisplayName("Description")]
        [HtmlNoteContentEditor]
        public string Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [DisplayName("Width")]
        [DecimalEditor(Decimals =6),  AlignRight]
        public Decimal? Width
        {
            get { return Fields.Width[this]; }
            set { Fields.Width[this] = value; }
        }

        [DisplayName("Height")]
        [DecimalEditor(Decimals = 6),  AlignRight]
        public Decimal? Height
        {
            get { return Fields.Height[this]; }
            set { Fields.Height[this] = value; }
        }

        [DisplayName("Quadrature"), ReadOnly(true), Expression("t0.[Width] *  t0.[Height]"), MinSelectLevel(SelectLevel.List)]
        [DecimalEditor(Decimals = 6), DisplayFormat("#,####0.0000"), AlignRight]
        public Decimal? Quadrature
        {
            get { return Fields.Quadrature[this]; }
            set { Fields.Quadrature[this] = value; }
        }

        [DisplayName("Product Product Image"), Expression("jProduct.[ProductImage]")]
        public String ProductProductImage
        {
            get { return Fields.ProductProductImage[this]; }
            set { Fields.ProductProductImage[this] = value; }
        }

        [DisplayName("Product Discontinued"), Expression("jProduct.[Discontinued]")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierId]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        [DisplayName("Quantity Per Unit"), Expression("jProduct.[QuantityPerUnit]"), MinSelectLevel(SelectLevel.List)]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public Int16? ProductUnitsInStock
        {
            get { return Fields.ProductUnitsInStock[this]; }
            set { Fields.ProductUnitsInStock[this] = value; }
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public Int16? ProductUnitsOnOrder
        {
            get { return Fields.ProductUnitsOnOrder[this]; }
            set { Fields.ProductUnitsOnOrder[this] = value; }
        }
        
        [DisplayName("Order Account Id"), Expression("jOrder.[AccountId]")]
        public Int32? OrderAccountId
        {
            get { return Fields.OrderAccountId[this]; }
            set { Fields.OrderAccountId[this] = value; }
        }

        [DisplayName("Order Company Id"), Expression("jOrder.[CompanyId]")]
        public Int32? OrderCompanyId
        {
            get { return Fields.OrderCompanyId[this]; }
            set { Fields.OrderCompanyId[this] = value; }
        }

        [DisplayName("Order Payment Type Id"), Expression("jOrder.[PaymentTypeId]")]
        public Int32? OrderPaymentTypeId
        {
            get { return Fields.OrderPaymentTypeId[this]; }
            set { Fields.OrderPaymentTypeId[this] = value; }
        }
        
        [DisplayName("Order User Id"), Expression("jOrder.[UserId]")]
        public Int32? OrderUserId
        {
            get { return Fields.OrderUserId[this]; }
            set { Fields.OrderUserId[this] = value; }
        }

        [DisplayName("Order Order Status Id"), Expression("jOrder.[OrderStatusId]")]
        public Int32? OrderOrderStatusId
        {
            get { return Fields.OrderOrderStatusId[this]; }
            set { Fields.OrderOrderStatusId[this] = value; }
        }
        

        [DisplayName("Line Total"), Expression(@"
CASE WHEN (T0.[Width] *  T0.[Height] > 0) THEN 
(t0.[UnitPrice] * t0.[Quantity] ) * (T0.[Width] *  T0.[Height] ) - t0.[Discount] + t0.[AdditionalCosts]
ELSE
(t0.[UnitPrice] * t0.[Quantity] - t0.[Discount] + t0.[AdditionalCosts]) 
END
")]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.OrderDetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderDetailId;
            public Int32Field ProductId;
            public Int32Field OrderId;
            public DecimalField UnitPrice;
            public Int16Field Quantity;
            public Int16Field Discount;
            public Int16Field AdditionalCosts;
            public StringField Description;
            public DecimalField Width;
            public DecimalField Height;
            public DecimalField Quadrature;

            public StringField ProductName;
            public StringField ProductProductImage;
            public BooleanField ProductDiscontinued;
            public Int32Field ProductSupplierId;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            public Int16Field ProductUnitsInStock;
            public Int16Field ProductUnitsOnOrder;

            public Int32Field OrderAccountId;
            public Int32Field OrderCompanyId;
            public Int32Field OrderPaymentTypeId;
            public Int32Field OrderUserId;
            public Int32Field OrderOrderStatusId;
            public RowListField<NoteRow> NoteList;

            public DecimalField LineTotal;

        }
    }
}
