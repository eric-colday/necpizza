import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const PUT = async (req: { params?: { intentId?: string } }) => {
  if (!req.params || !req.params.intentId) {
    return new NextResponse(
      JSON.stringify({ message: "Missing parameters!" }),
      { status: 400 }
    );
  }

  const { intentId } = req.params;

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
