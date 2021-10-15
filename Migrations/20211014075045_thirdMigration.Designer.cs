﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using crud_react.Models;

namespace crud_react.Migrations
{
    [DbContext(typeof(DbTiendaContext))]
    [Migration("20211014075045_thirdMigration")]
    partial class thirdMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("crud_react.Models.DbCliente", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("phone_number")
                        .HasColumnType("nvarchar(16)");

                    b.HasKey("id");

                    b.ToTable("DbClientes");
                });

            modelBuilder.Entity("crud_react.Models.DbFactura", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(60)");

                    b.Property<string>("fecha")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("id_cliente")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("id_producto")
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("iva")
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("n_factura")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("id");

                    b.ToTable("DbFacturas");
                });

            modelBuilder.Entity("crud_react.Models.DbProducto", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("price")
                        .IsRequired()
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("stock")
                        .HasColumnType("nvarchar(16)");

                    b.HasKey("id");

                    b.ToTable("DbProductos");
                });

            modelBuilder.Entity("crud_react.Models.DbProveedor", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("direccion")
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("frecuencia")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("persona_contacto")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("phone_number")
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("ramo")
                        .HasColumnType("nvarchar(30)");

                    b.HasKey("id");

                    b.ToTable("DbProveedores");
                });
#pragma warning restore 612, 618
        }
    }
}
